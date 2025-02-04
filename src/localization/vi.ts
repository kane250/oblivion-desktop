import { Language } from './type';

const vietnamese: Language = {
    global: {},
    status: {
        connecting: 'Đang kết nối ...',
        connected: 'Đã kết nối',
        connected_confirm: 'Đã kết nối',
        disconnecting: 'Đang ngắt kết nối ...',
        disconnected: 'Đã ngắt kết nối',
        ip_check: 'Đang kiểm tra IP ...',
        keep_trying: 'Vui lòng đợi một chút để thử lại...',
        preparing_rulesets: 'Đang chuẩn bị các bộ quy tắc...',
        downloading_rulesets_failed: 'Tải xuống các bộ quy tắc không thành công.'
    },
    home: {
        title_warp_based: 'Dựa trên Warp',
        drawer_settings_warp: 'Cài đặt Warp',
        drawer_settings_routing_rules: 'Quy tắc định tuyến',
        drawer_settings_app: 'Cài đặt ứng dụng',
        drawer_settings_scanner: 'Cài đặt Máy quét',
        drawer_settings_network: 'Cài đặt mạng',
        drawer_log: 'Nhật ký ứng dụng',
        drawer_update: 'Cập nhật',
        drawer_update_label: 'Cập nhật mới',
        drawer_speed_test: 'Kiểm tra tốc độ',
        drawer_about: 'Giới thiệu về ứng dụng',
        drawer_lang: 'Thay đổi ngôn ngữ',
        drawer_singbox: 'Cài đặt Đường hầm'
    },
    toast: {
        ip_check_please_wait: 'Vui lòng đợi vài giây để kiểm tra lại!',
        ir_location:
            'Cloudflare đã kết nối với một IP có vị trí ở Iran, khác với IP thực của bạn. Bạn có thể sử dụng nó để vượt qua kiểm duyệt, nhưng không vượt qua được các lệnh trừng phạt. Đừng lo! Bạn có thể thay đổi vị trí trong cài đặt bằng cách sử dụng tùy chọn "Gool" hoặc "Psiphon".',
        btn_submit: 'Đã hiểu',
        copied: 'Đã sao chép!',
        cleared: 'Nhật ký đã được xóa!',
        please_wait: 'Vui lòng đợi ...',
        offline: 'Bạn đang ngoại tuyến!',
        settings_changed: 'Việc áp dụng cài đặt yêu cầu kết nối lại.',
        hardware_usage: 'Bật tùy chọn này sẽ tăng mức sử dụng tài nguyên phần cứng.',
        config_added:
            'Cấu hình đã được thêm thành công, và để sử dụng nó, bạn phải nhấp vào kết nối.',
        profile_added: 'Điểm cuối đã được thêm thành công vào hồ sơ.',
        endpoint_added: 'Điểm cuối đã được thay thế thành công.'
    },
    settings: {
        title: 'Cài đặt Warp',
        more: 'Thêm cài đặt',
        method_warp: 'Warp',
        method_warp_desc: 'Bật Warp',
        method_gool: 'Gool',
        method_gool_desc: 'Bật WarpInWarp',
        method_psiphon: 'Psiphon',
        method_psiphon_desc: 'Bật Psiphon',
        method_psiphon_location: 'Quốc gia',
        method_psiphon_location_auto: 'ngẫu nhiên',
        method_psiphon_location_desc: 'Chọn IP quốc gia mong muốn',
        endpoint: 'Điểm kết thúc',
        endpoint_desc: 'Kết hợp giữa địa chỉ IP hoặc tên miền, cùng với cổng',
        license: 'Giấy phép',
        license_desc: 'Sử dụng giấy phép tăng gấp đôi',
        option: 'Cài đặt ứng dụng',
        network: 'Cài đặt mạng',
        proxy_mode: 'Cấu hình',
        proxy_mode_desc: 'Định nghĩa cài đặt Proxy',
        port: 'Cổng Proxy',
        port_desc: 'Định nghĩa cổng proxy của ứng dụng',
        share_vpn: 'Địa chỉ liên kết',
        share_vpn_desc: 'Chia sẻ proxy qua mạng',
        dns: 'DNS',
        dns_desc: 'Chặn quảng cáo & nội dung người lớn',
        dns_error: 'Áp dụng cho các phương pháp Warp & Gool',
        ip_data: 'Kiểm tra IP',
        ip_data_desc: 'Hiển thị IP & vị trí sau khi kết nối',
        data_usage: 'Sử dụng dữ liệu',
        data_usage_desc: 'Hiển thị mức sử dụng dữ liệu & tốc độ thời gian thực',
        dark_mode: 'Chế độ tối',
        dark_mode_desc: 'Chọn chế độ hiển thị của ứng dụng',
        lang: 'Ngôn ngữ',
        lang_desc: 'Thay đổi ngôn ngữ giao diện ứng dụng',
        open_login: 'Mở khi đăng nhập',
        open_login_desc: 'Mở khi khởi động hệ thống',
        auto_connect: 'Kết nối tự động',
        auto_connect_desc: 'Kết nối khi mở ứng dụng',
        system_tray: 'Khây hệ thống',
        system_tray_desc: 'Không đặt biểu tượng chương trình trong thanh tác vụ',
        force_close: 'Đóng bắt buộc',
        force_close_desc: 'Không ở lại trong khay hệ thống sau khi thoát',
        shortcut: 'Điều hướng',
        shortcut_desc: 'Phím tắt trên trang chủ',
        sound_effect: 'hiệu ứng âm thanh',
        sound_effect_desc: 'phát âm thanh khi kết nối thành công',
        restore: 'Khôi phục',
        restore_desc: 'Áp dụng cài đặt mặc định của ứng dụng',
        scanner: 'Cài đặt máy quét',
        scanner_alert:
            'Máy quét được kích hoạt nếu bạn đang sử dụng địa chỉ điểm kết thúc mặc định.',
        scanner_ip_type: 'Loại điểm kết thúc',
        scanner_ip_type_auto: 'Tự động',
        scanner_ip_type_desc: 'Để tìm IP điểm kết thúc',
        scanner_rtt: 'Khoảng thời gian',
        scanner_rtt_default: 'Mặc định',
        scanner_rtt_desc: 'Giới hạn RTT của máy quét',
        scanner_reserved: 'Dành riêng',
        scanner_reserved_desc: 'Ghi đè giá trị dự trữ WireGuard',
        routing_rules: 'Danh sách đen',
        routing_rules_desc: 'Ngăn lưu lượng truy cập qua warp',
        routing_rules_disabled: 'Tắt',
        routing_rules_items: 'Các mục',
        profile: 'Hồ sơ',
        profile_desc: 'Điểm kết thúc được bạn lưu',
        singbox: 'Cài đặt Singbox',
        close_singbox: 'Dừng hoạt động',
        close_singbox_desc: 'Tự động đóng sing-box khi ngắt kết nối',
        close_helper: 'Dừng trợ lý',
        close_helper_desc: 'Tự động đóng trợ lý khi thoát',
        mtu: 'Giá trị MTU',
        mtu_desc: 'Đặt Đơn vị Truyền tối đa',
        geo_block: 'Chặn',
        geo_block_desc: 'Quảng cáo, Phần mềm độc hại, Lừa đảo & Đào tiền mã hóa',
        geo_rules_ip: 'Định tuyến IP',
        geo_rules_ip_desc: 'Áp dụng các quy tắc GeoIP',
        geo_rules_site: 'Định tuyến Web',
        geo_rules_site_desc: 'Áp dụng các quy tắc GeoSite',
        geo_nsfw_block: 'Bộ lọc nội dung',
        geo_nsfw_block_desc: 'Chặn trang web NSFW',
        more_helper: 'Đối tượng Phật',
        singbox_log: 'Ghi Log',
        singbox_log_desc: 'Cài đặt Mức Log',
        singbox_stack: 'Ngăn Xếp',
        singbox_stack_desc: 'Cài đặt Loại Ngăn Xếp',
        singbox_sniff: 'Nghe Gói',
        singbox_sniff_desc: 'Bật tính năng sniffing và ghi đè điểm đến',
        singbox_addressing: 'Định địa chỉ',
        singbox_addressing_desc: 'Đặt loại địa chỉ giao diện',
        more_duties: 'Nhiệm vụ thêm',
        beta_release: 'Cập nhật Beta',
        beta_release_desc: 'Cập nhật thông tin về các phiên bản trước khi phát hành'
    },
    tabs: {
        home: 'Kết nối',
        warp: 'Warp',
        network: 'Mạng',
        scanner: 'Máy quét',
        app: 'Ứng dụng',
        singbox: 'Hộp hát'
    },
    modal: {
        endpoint_title: 'Điểm kết thúc',
        license_title: 'Giấy phép',
        license_desc:
            'Chương trình không cần giấy phép Warp để chạy, nhưng nếu bạn muốn, bạn có thể nhập giấy phép của mình ở đây.',
        license_clear: 'Xóa',
        test_url_title: 'URL kiểm tra',
        test_url_desc: 'Địa chỉ kiểm tra kết nối',
        test_url_update: 'Nhận đề xuất',
        port_title: 'Cổng Proxy',
        restore_title: 'Khôi phục thay đổi',
        restore_desc:
            'Xác nhận việc khôi phục sẽ đưa tất cả các cài đặt của chương trình trở về trạng thái mặc định và kết nối của bạn sẽ bị ngắt.',
        routing_rules_sample: 'Mẫu',
        routing_rules_alert_tun:
            'Chỉ các quy tắc định tuyến cho tên miền, ip và ứng dụng sẽ ảnh hưởng đến cấu hình Tun.',
        routing_rules_alert_system:
            'Ngoại trừ quy tắc định tuyến ứng dụng, các quy tắc khác sẽ ảnh hưởng đến cấu hình Proxy Hệ thống.',
        endpoint_default: 'Mặc định',
        endpoint_suggested: 'Đề xuất',
        endpoint_latest: 'Mới nhất',
        endpoint_update: 'Nhận điểm kết thúc đề xuất',
        endpoint_paste: 'Dán điểm kết thúc đang hoạt động',
        profile_title: 'Hồ sơ',
        profile_name: 'Tiêu đề',
        profile_endpoint: 'Điểm kết thúc',
        profile_limitation: (value) => `Bạn có thể thêm tối đa ${value} điểm kết thúc.`,
        mtu_title: 'Giá trị MTU',
        mtu_desc:
            'Đơn vị Truyền tối đa (MTU) đề cập đến kích thước tối đa của các gói dữ liệu, nên được đặt trong khoảng từ 1000 đến 9999.',
        confirm: 'Tôi xác nhận',
        update: 'Cập nhật',
        cancel: 'Hủy'
    },
    log: {
        title: 'Nhật ký ứng dụng',
        desc: 'Nếu nhật ký được tạo bởi chương trình, nó sẽ được hiển thị ở đây.',
        error_invalid_license: 'Giấy phép đã nhập không hợp lệ; Vui lòng xóa.',
        error_too_many_connected: 'Giới hạn sử dụng giấy phép đã đạt; Vui lòng xóa.',
        error_access_denied: 'Chạy chương trình với quyền quản trị viên.',
        error_failed_set_endpoint: 'Kiểm tra hoặc thay đổi giá trị điểm kết thúc, hoặc thử lại.',
        error_warp_identity: 'Lỗi xác thực trên Cloudflare; Thử lại.',
        error_script_failed: 'Chương trình gặp lỗi; Thử lại.',
        error_object_null: 'Chương trình gặp lỗi; Thử lại.',
        error_port_already_in_use: (value) =>
            `Cổng ${value} đang được sử dụng bởi chương trình khác; Thay đổi cổng.`,
        error_port_socket: 'Sử dụng cổng khác.',
        error_port_restart: 'Cổng đang được sử dụng; khởi động lại ...',
        error_unknown_flag: 'Một lệnh không hợp lệ đã được thực thi trong nền.',
        error_deadline_exceeded: 'Hết thời gian kết nối; Thử lại.',
        error_configuration_encountered: 'Cấu hình proxy gặp lỗi!',
        error_desktop_not_supported: 'Môi trường máy tính để bàn không được hỗ trợ!',
        error_configuration_not_supported:
            'Cấu hình proxy không được hỗ trợ trên hệ điều hành của bạn, nhưng bạn có thể sử dụng Warp Proxy thủ công.',
        error_configuring_proxy: (value) => `Lỗi cấu hình proxy cho ${value}!`,
        error_wp_not_found: 'Tệp warp-plus không được tìm thấy cùng với gói ứng dụng!',
        error_wp_stopped: 'Tệp warp-plus gặp vấn đề khi chạy!',
        error_connection_failed: 'Không thể kết nối với 1.1.1.1.',
        error_country_failed: 'Không thể kết nối với quốc gia đã chọn.',
        error_singbox_failed_stop: 'Không thể dừng Hộp hát!',
        error_singbox_failed_start: 'Không thể khởi động Hộp hát!',
        error_wp_reset_peer: 'Kết nối đến Cloudflare bị gián đoạn đột ngột!',
        error_failed_connection: 'Không thể thiết lập kết nối!',
        error_canceled_by_user: 'Hoạt động đã bị hủy bởi người dùng.',
        error_helper_not_found: 'Tệp trợ giúp không được tìm thấy bên cạnh gói ứng dụng!'
    },
    about: {
        title: 'Giới thiệu về ứng dụng',
        desc: 'Chương trình này là một phiên bản không chính thức nhưng đáng tin cậy của ứng dụng Oblivion dành cho Windows, Linux và Mac.\nChương trình Oblivion Desktop được mô phỏng theo giao diện người dùng của phiên bản gốc do Yousef Ghobadi phát triển. Nó được chuẩn bị với mục đích truy cập miễn phí vào Internet và việc đổi tên hoặc sử dụng thương mại là không được phép.',
        slogan: 'Internet, dành cho tất cả hoặc không ai!'
    },
    systemTray: {
        connect: 'Kết nối',
        connecting: 'Đang kết nối ...',
        connected: 'Đã kết nối',
        disconnecting: 'Đang ngắt kết nối ...',
        settings: 'Cài đặt',
        settings_warp: 'Warp',
        settings_network: 'Mạng',
        settings_scanner: 'Máy quét',
        settings_app: 'Ứng dụng',
        about: 'Giới thiệu',
        log: 'Nhật ký',
        speed_test: 'Kiểm tra tốc độ',
        exit: 'Thoát'
    },
    update: {
        available: 'Cập nhật có sẵn',
        available_message: (value) =>
            `Có một phiên bản mới của ${value} sẵn sàng. Bạn có muốn cập nhật ngay không?`,
        ready: 'Cập nhật sẵn sàng',
        ready_message: (value) =>
            `Phiên bản mới của ${value} đã sẵn sàng. Nó sẽ được cài đặt sau khi khởi động lại. Bạn có muốn khởi động lại ngay không?`
    },
    speedTest: {
        title: 'Kiểm tra tốc độ',
        initializing: 'Đang khởi tạo kiểm tra tốc độ ...',
        click_start: 'Nhấp vào nút để bắt đầu kiểm tra tốc độ',
        error_msg: 'Đã xảy ra lỗi trong quá trình kiểm tra tốc độ. Vui lòng thử lại.',
        server_unavailable: 'Máy chủ kiểm tra tốc độ không khả dụng',
        download_speed: 'Tốc độ tải xuống',
        upload_speed: 'Tốc độ tải lên',
        latency: 'Độ trễ',
        jitter: 'Độ dao động'
    }
};
export default vietnamese;
